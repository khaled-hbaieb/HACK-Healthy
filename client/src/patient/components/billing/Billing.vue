<template>
            <div>
                <vs-row>
                    <vs-col>
                        <vs-card max-items="1" pagination>
                            <vs-card>
                                <h3><b>INVOICE</b> <span class="pull-right">#5669626</span></h3>
                                <hr>
                                <vs-row>
                                    <vs-col>
                                        <div class="pull-left">
                                            <address>
                                                <h3> &nbsp;<b class="text-danger">Elite Hospital</b></h3>
                                                <p class="text-muted m-l-5">E 104, Dharti-2,
                                                    <br/> Nr' Viswakarma Temple,
                                                    <br/> Talaja Road,
                                                    <br/> Bhavnagar - 364002</p>
                                            </address>
                                        </div>
                                        <div class="pull-right text-right">
                                            <address>
                                                <h3>To,</h3>
                                                <h4 class="font-bold">Richard Nixon</h4>
                                                <p class="text-muted m-l-30">E 104, Dharti-2,
                                                    <br/> Nr' Viswakarma Temple,
                                                    <br/> Talaja Road,
                                                    <br/> Bhavnagar - 364002</p>
                                                <p class="m-t-30"><b>Invoice Date :</b> <i class="fa fa-calendar"></i> 23rd Jan 2017</p>
                                                <p><b>Due Date :</b> <i class="fa fa-calendar"></i> 25th Jan 2017</p>
                                            </address>
                                        </div>
                                    </vs-col>
                                    <vs-col>
                                        <div class="table-responsive m-t-40">
                                            <vs-table class="table table-hover">
                                                <vs-thead>
                                                    <vs-tr>
                                                        <vs-th class="text-center">#</vs-th>
                                                        <vs-th>Item Name</vs-th>
                                                        <vs-th class="text-right">Quantity</vs-th>
                                                        <vs-th class="text-right">Charges</vs-th>
                                                        <vs-th class="text-right">Total</vs-th>
                                                    </vs-tr>
                                                </vs-thead>
                                                <tbody>
                                                    <vs-tr>
                                                        <td class="text-center">1</td>
                                                        <td>Visiting Charges</td>
                                                        <td class="text-right">-</td>
                                                        <td class="text-right">$100</td>
                                                        <td class="text-right">$100</td>
                                                    </vs-tr>
                                                    <vs-tr>
                                                        <td class="text-center">2</td>
                                                        <td>Medicines</td>
                                                        <td class="text-right">10</td>
                                                        <td class="text-right">$100</td>
                                                        <td class="text-right">$1000</td>
                                                    </vs-tr>
                                                    <vs-tr>
                                                        <td class="text-center">3</td>
                                                        <td>X-ray Reports</td>
                                                        <td class="text-right">2</td>
                                                        <td class="text-right">$600</td>
                                                        <td class="text-right">$1200</td>
                                                    </vs-tr>
                                                    <vs-tr>
                                                        <td class="text-center">4</td>
                                                        <td>Other Charges</td>
                                                        <td class="text-right">-</td>
                                                        <td class="text-right">-</td>
                                                        <td class="text-right">$300</td>
                                                    </vs-tr>
                                                </tbody>
                                            </vs-table>
                                        </div>
                                    </vs-col>
                                    <vs-col>
                                        <div class="pull-right m-t-30 text-right">
                                            <p>Sub - Total amount: $1600</p>
                                            <p>vat (10%) : $160 </p>
                                            <hr>
                                            <h3><b>Total :</b> $1760</h3> </div>
                                        <div class="clearfix"></div>
                                        <hr>
                                        <div class="text-right">
                                            <vs-button onClick="javascript:window.print();" class="btn btn-danger" type="button"> <span><i class="fa fa-print"></i> Print</span> </vs-button>
                                        </div>
                                    </vs-col>
                                </vs-row>
                            </vs-card>
                        </vs-card>
                    </vs-col>
                </vs-row>
                <vs-pagination :total="30" v-model="currentx" :max="13"></vs-pagination>
            </div>
</template>

<script>
export default {
    data: () => {
        return {

        }
    },
    computed:{
        
    },
    methods:{

    },
    beforeMount() {

    }
}
</script>

<style>

</style>