 <template>
    <div>
        <vs-row class="row">
            <vs-col class="col-sm-12">
                <vs-card id="header-titles" class="card">
                <vs-col vs-lg="11">
                    <h4 class="text-themecolor">My History</h4>
                </vs-col>
                <vs-col vs-lg="1">
                    <h6 class="text-themecolor">
                    </h6>
                </vs-col>
                </vs-card>
            </vs-col>
        </vs-row> 
  </div>
</template>
<script>

import axios from "axios";
import UserService from '../../../services/user.service';
export default {
    data: () => {
        return {
            history: null,
            subTotal: 0,
            currentx: 1,
            currentUser: null,
            tax: 0,
            total: 0,
        }
    },
    computed:{
        
    },
    methods:{

    },
    async beforeMount() {
        let user = await UserService.getPatientBoard()
        this.currentUser = user;
        let oneHistory =await axios.post("/api/users/clinicX/history/findOneHistory", user)
        this.history = oneHistory.data
        console.log(this.history)
    }
}
</script>

<style>

</style>