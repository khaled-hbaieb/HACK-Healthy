  async chat() {
    var description1 = this.props.post.description;
    $("#chatbox").show();
    // Make connection
    var socket = io.connect("http://localhost:3000");

    // Query DOM
    var message = document.getElementById("message"),
      handle = document.getElementById("handle"),
      btn = document.getElementById("send"),
      output = document.getElementById("output"),
      feedback = document.getElementById("feedback");

    // Emit events
    console.log(message.value, handle, btn, output, feedback);

    // getting the saved messages from the database and posting them on the output
    var msg = await axios.post("/GetMessages", {
      description: description1,
    });
    var getall = "[" + msg.data.slice(0, msg.data.length - 1) + "]";
    // output.value === msg;
    var resultmsg = JSON.parse(getall);
    console.log(resultmsg);
    // $("#output").html("");
    resultmsg.map((msg, i) => {
      socket.emit("chat", { message: msg.message, handle: msg.sender });
    });
    btn.addEventListener("click", function () {
      if ($("#message").val() && $("#handle").val()) {
        socket.emit("chat", {
          message: message.value,
          handle: handle.value,
        });
        $("#output").scrollTop($("#output")[0].scrollHeight);
        console.log(message.value, handle.value);
        var dat = new Date().toString();
        // console.log(description1);


        axios.post("/messages", {
          sender: handle.value,
          message: message.value,
          date: dat,
          description: description1,
        });
        $("#chat-window").scrollTop($("#chat-window")[0].scrollHeight);
        $("#message").val("");
      }
    });




    message.addEventListener("keypress", function () {
      socket.emit("typing", handle.value);
    });

    // Listen for events
    socket.on("chat", function (data) {
      feedback.innerHTML = "";
      output.innerHTML +=
        "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
    });

    socket.on("typing", function (data) {
      feedback.innerHTML =
        "<p><em>" + data + " is typing a message...</em></p>";
    });