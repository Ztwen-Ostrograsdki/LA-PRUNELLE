<template>
	<div class="w-100 p-1 mx-auto">
		<div class="w-100 mx-auto d-flex justify-content-center">
			<table class="table-table table-striped w-100">
				<transition name="justefade" appear>
                    <thead>
                        <th class="border-right border-white">Matières</th>
                        <th class="border-right border-white">Coef</th>
                        <th class="border-right border-white">Interrogations (EPE)</th>
                        <th class="border-right border-white">Devoirs</th>
                        <th>Moyenne</th>
                    </thead>
                </transition>
               	<transition name="fadelow" appear>
                    <tbody class="w-100 marks-td">
                    	<tr class="border-bottom border-white">
                    		<td class="border-right border-white bg-linear-official-180">x</td>
                    		<td class="border-right border-white bg-linear-official-180">x</td>
                    		<td class="text-center border-right border-white">
                    			<table class="text-center w-100 text-white-50">
	                    			<tbody class="w-100">
	                    				<tr class="text-center w-100">
	                    					<td class="text-center border-right border-white">Int 1</td>
	                    					<td class="text-center border-right border-white">Int 2</td>
	                    					<td class="text-center border-right border-white">Int 3</td>
	                    					<td class="text-center border-right border-white">Int 4</td>
	                    					<td class="text-center border-right border-white">Int 5</td>
	                    					<td class="text-primary">Moy Int</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    		<td class="text-center border-right border-white">
                    			<table class="text-center w-100 text-primary">
	                    			<tbody class="w-100">
	                    				<tr class="w-100">
	                    					<td class="text-center border-right border-white">Dev 1</td>
	                    					<td>Dev 2</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    		<td class="bg-linear-official-180">
                    			<table class="text-center w-100">
	                    			<tbody class="w-100">
	                    				<tr class="w-100">
	                    					<td class="text-center border-right border-white text-warning">Moy Coef</td>
	                    					<td class="text-success">Moy</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    	</tr>
                    	<tr class="border-bottom border-white" v-for="subject in editedPupilSubjects">
                    		<td class="d-flex justify-content-between pl-2 w-100">
                    			<a class="w-75" href="#">
                    				<span class="float-left">{{ subject.name }}</span>
                    			</a>
                    			<span class="fa fa-edit mr-3 text-white-50 mt-2" style="font-size: 9px" :title="'Editer les notes en ' + subject.name + ' de ' + editedPupil.name " data-toggle="modal" data-target="#editPupilMarks"></span>
                    		</td>
                    		<td class="text-center border-right border-left border-white">2</td>
                    		<td class="text-center border-right border-left border-white">
                    			<table class="text-center w-100 text-white-50">
	                    			<tbody class="w-100">
	                    				<tr class="text-center w-100">
	                    					<td class="text-center border-right border-white">10</td>
	                    					<td class="text-center border-right border-white">11</td>
	                    					<td class="text-center border-right border-white">14</td>
	                    					<td class="text-center border-right border-white">19</td>
	                    					<td class="text-center border-right border-white">19</td>
	                    					<td class="text-primary">13</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    		<td class="text-center border-right border-white">
                    			<table class="text-center w-100 text-primary">
	                    			<tbody class="w-100">
	                    				<tr class="w-100">
	                    					<td class="text-center border-right border-white">19</td>
	                    					<td>13</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    		<td>
                    			<table class="text-center w-100">
	                    			<tbody class="w-100">
	                    				<tr class="w-100">
	                    					<td class="text-center border-right border-white text-warning">45</td>
	                    					<td class="text-success">13</td>
	                    				</tr>
	                    			</tbody>
	                    		</table>
                    		</td>
                    	</tr>
                    	
                    </tbody>
                </transition>
			</table>
		</div>
		
		<div class="d-flex flex-column w-100 m-0 p-0 my-2">
			<div class="d-flex w-100 m-0 p-0 my-2 justify-content-around text-white-50 trimestre">
				<div class="bg-linear-official-50" style="width: 33%;">
					<trimestre :trimestreName="'Trimestre 1'" :border="'border-success'"></trimestre>
				</div>
				<div class="bg-linear-official-50" style="width: 33%;">
					<trimestre :trimestreName="'Trimestre 2'" :border="'border-primary'"></trimestre>
				</div>
				<div class="bg-linear-official-50" style="width: 33%;">
					<trimestre :trimestreName="'Trimestre 3'" :border="'border-warning'"></trimestre>
				</div>
			</div>
			<div class="mx-auto mt-1 row w-100">
				<div class="border border-white mx-auto box-color-blue col-10 py-2">
					<trimestre-general></trimestre-general>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default{
		data() {
            return {

            }   
        },

		methods: {
			
		},
		computed: mapState([
          	'targetPupilLastName', 'targetPupilFirstName', 'targetPupilClasseFMT', 'targetPupilBirthFMT', 'editedPupilSubjects', 'editedPupil'
        ])

	}
</script>

<style>
	.marks-td tr table tr td{
		width: 15%;
	}
	.marks-td tr table tr td.coef{
		width: 10% !important;
	}

	.trimestre h5{
		font-size: 10px;
		margin: 0px;
		padding: 2;
	}
</style>