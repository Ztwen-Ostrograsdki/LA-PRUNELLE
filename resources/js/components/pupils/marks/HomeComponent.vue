<template>
	<div class="container-profil bg-linear-official-180 mx-1 p-0 border">
		<div id="text-profil-container-opac">
			<h3 class="text-profil-opac mx-auto text-center">

			</h3>
		</div>
		<div class="justify-content-center w-100 m-0 p-0">
			<transition name="fade" appear>
				<!-- <pupil-profil-main></pupil-profil-main> -->
			</transition>
		</div>
		<div class="d-flex w-100 my-1 py-1 justify-content-start">
            <div class="mx-1 my-0 w-100">
                <h5 class="d-flex justify-content-between w-100 p-2">
	                <span>
	                	<span class="text-white-50">Nom et Prénoms :</span> {{ editedPupil.name }}
	                </span> 
	                <div class="d-flex justify-content-between">
	                	<div class="mr-2">
	                		<router-link :to="{name: 'classesProfil', params: {id: classeID}}"   class="card-link text-white-50 d-inline-block">
	                			<span class="text-white-50">Classe :</span> {{targetPupilClasseFMT.name}}<sup>{{ targetPupilClasseFMT.sup }}</sup> {{ targetPupilClasseFMT.idc }}
	                		</router-link>
	                	</div>
	                	<div class="ml-2" v-if="editedPupil.level == 'primary'">
	                		<span> <span class="text-white-50">Maître: </span>{{ 'Mr TOGAN Martin' }}</span>
	                	</div>
	                </div>
	                <span>
	                	<span class="text-white-50">Année Scolaire:</span> 2020 - 2021
	                </span>
	            </h5>
            </div>
        </div>
		<div class="d-flex w-100 my-1 py-1 justify-content-between">
            <div class="mx-1 my-0">
                <span class="btn btn-primary text-white-50 py-1">Trimestre 1</span>
                <span class="btn btn-primary text-white-50 py-1">Trimestre 2</span>
                <span class="btn btn-primary text-white-50 py-1">Trimestre 3</span>
                <span class="btn btn-warning text-dark py-1" v-if="targetPupilClasseFMT.name == '3' || targetPupilClasseFMT.name == 'T' || targetPupilClasseFMT.name == 'CM2'">Les notes d'examens</span>
            </div>
            <div class="mx-1 d-flex justify-content-between flex-column font-italic">
            	<div class="mx-1 d-flex justify-content-between font-italic">
	            	<div class="mx-2">
	            		<h5 class="text-white-50 h5-title">Plus Faible note: <span class="text-danger">08</span></h5>
	            	</div>
	            	<div>
	            		<h5 class="text-white-50 h5-title">Plus Forte note: <span class="text-success">17</span></h5>
	            	</div>
	            </div>
	            <div class="mx-1 d-flex justify-content-between font-italic">
	            	<div class="mx-2">
	            		<h5 class="text-white-50 h5-title">Dernière Evaluation: <span class="text-warning">15 (PCT) </span></h5>
	            	</div>
	            	<div>
	            		<h5 class="text-white-50 h5-title">Pourcentage de réussite dans les Evalautions: <span class="text-success">47%</span></h5>
	            	</div>
	            </div>
            </div>
        </div>
		<div class="mt-1" id="pupil-profil">
			<div class="d-flex justify-content-between">
				<transition name="justefade" appear>
					<marks-table></marks-table>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		data() {
            return {
            	classeID: 0,
            }   
        },

        created(){
        	axios.get('/admin/director/pupilsm/get&classe&of&pupil&with&data&credentials/id=' + this.$route.params.id)
                .then(response => {
                    this.$store.commit('GET_A_PUPIL_DATA', response.data)
                    this.classeID = this.editedPupil.classe_id
                }
            )
        },
		


		methods: {

		},
		computed: mapState([
          	'targetPupilLastName', 'targetPupilFirstName', 'targetPupilClasseFMT', 'targetPupilBirthFMT', 'marks', 'editedPupilSubjects', 'editedPupil'
        ])

	}
</script>

<style>

</style>
