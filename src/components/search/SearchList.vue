<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="compoundName">Compound Name</label >
<!--          why?-->
      <input type="text" id="compoundName" v-model.trim="compoundName.val"  @blur="clearValidity('compoundName')"/>
    </div>
    <div class="form-control">
      <label for="molecularFormula">Molecular Formula</label>
      <input type="text" id="molecularFormula" v-model.trim="molecularFormula.val" @blur="clearValidity(molecularFormula)"/>
    </div>
    <div class="form-control">
       <label for="CAS_registryNumber">CAS Registry No.</label>
       <input type="text" id="CAS_registryNumber" v-model.trim="CAS_registryNumber.val" @blur="clearValidity('CAS_registryNumber')"/>
    </div>
    <div class="form-control">
      <label for="smiles">SMILES</label>
      <input type="text" id="smiles" v-model.trim="smiles.val"  @blur="clearValidity('smiles')"/>
    </div>
    <p v-if="!formIsValid">Please fill in at least one blank and submit again.</p>
    <base-button>Search</base-button>
  </form>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  emits:['search-molecule'],
  components: {BaseButton},
  data(){
    return{
      compoundName:
      {
        val: '',
        isValid: true,
      },
      molecularFormula:
      {
        val: '',
        isValid: true,
      },
      CAS_registryNumber:
      {
        val: '',
        isValid: true,
      },
      smiles:{
        val:'',
        isValid:true
      },
      formIsValid:true
    }
  },
  methods:{
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm(){
      this.formIsValid = true
      if (this.compoundName.val === '') {
        this.compoundName.isValid = false
      }
      if (this.molecularFormula.val === '') {
        this.molecularFormula.isValid = false
      }
      if (this.CAS_registryNumber.val === '') {
        this.CAS_registryNumber.isValid = false
      }
      if (this.smiles.val === '') {
        this.smiles.isValid = false
      }
      if (!this.compoundName.isValid && !this.molecularFormula.isValid && !this.CAS_registryNumber.isValid && !this.smiles.isValid ){
      this.formIsValid=false}
    },
    submitForm(){
      this.validateForm()

      if (!this.formIsValid){
        return
      }

      const searchList={
        compoundName:this.compoundName.val,
        molecularFormula:this.molecularFormula.val,
        CAS_registryNumber:this.CAS_registryNumber.val,
        smiles:this.smiles.val
      }

      this.$emit('search-molecule',searchList)

    }

  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color:#3d008d;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

p {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color:#3d008d;
}
</style>