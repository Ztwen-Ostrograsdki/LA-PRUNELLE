<template>
	<div class="w-100 p-1 mx-auto">
		<div class="w-100 mx-auto d-flex justify-content-center">
			<table class="table-table table-striped w-100">
				<transition name="fadelow" appear>
                    <thead>
                        <th>Matières</th>
                        <th>Interrogations</th>
                        <th>Devoirs</th>
                        <th>Moyenne</th>
                    </thead>
                </transition>
               	<transition name="fadelow" appear>
                    <tbody class="w-100 marks-td">
                    	<tr class="border-bottom border-white">
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
                    		<td class="bg-linear-official-180">x</td>
                    	</tr>
                    	<tr class="border-bottom border-white" v-for="subject in editedPupilSubjects">
                    		<td class="float-left pl-2">{{ subject.name }}</td>
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
                    		<td>16.95</td>
                    	</tr>
                    	
                    </tbody>
                </transition>
			</table>
		</div>
		<hr class="m-0 my-1 p-0 bg-primary">
		<hr class="m-0 my-1 p-0 bg-success">
		<div class="d-flex w-100 m-0 p-0 my-2 justify-content-around text-white-50">
			<div class="border border-white" style="width: 33%;">
				<h5 class="text-center">Trimestre 1</h5>
			</div>
			<div class="border border-white" style="width: 33%;">
				<h5>Trimestre 2</h5>
			</div>
			<div class="border border-white" style="width: 33%;">
				<h5>Trimestre 3</h5>
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
		width: 16.66%;
	}
</style>