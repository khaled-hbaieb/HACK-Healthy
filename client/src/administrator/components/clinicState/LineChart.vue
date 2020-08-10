<script>
import { Pie } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Pie,
  data() {
    return {
      female:"",
      male:""
    };
  },
 
  async beforeMount() {
  let maleNumber =  await axios.get(`/api/users/clinicX/doctors`);
  
      var countMale =0;
      for (let i = 0; i < maleNumber.data.length; i++) {
        if(maleNumber.data[i].gender === "Male"){
           countMale++
        }
        
      }
      this.male = countMale
      
      
   let femaleNumber =  await axios.get(`/api/users/clinicX/doctors`);
      // this.number = available.data.length
     
      var countFemale =0;
      for (let i = 0; i < femaleNumber.data.length; i++) {
        if(femaleNumber.data[i].gender === "Female"){
           countFemale++
        }
        
      }
      this.female = countFemale
      
      this.renderChart(
     {
    datasets: [{
        data: [countFemale, countMale],
        backgroundColor:["pink","lightblue"],
        
    }],

    
    labels: [
        'Female',
        'Male'
    ]
},

      {
        responsive: true,
        maintainAspectRatio: false,
        gridLines: {
          color: "#e0e0e0"
        },
        legend: {
          position: "bottom"
        }
      }
    );
    
  }
};
</script>