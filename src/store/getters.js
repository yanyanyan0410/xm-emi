export default{
  // search(state) {
  //   const compoundName= state.request.compoundName
  //   const molecularFormula=state.request.molecularFormula
  //   const smiles =state.request.smiles
  //   const CAS_registryNumber=state.request.CAS_registryNumber
  //   console.log(CAS_registryNumber)
  //
  //   return state.molecules.filter(req => (
  //       req.compoundName === compoundName
  //       || req.molecularFormula===molecularFormula
  //       || req.CAS_registryNumber===CAS_registryNumber
  //       || req.smiles===smiles
  //   ))
  // }
  search(state){
      const request = state.request
      console.log(request)   //??????
      return state.molecules.some(req=> req.CAS_registryNumber===request.CAS_registryNumber)
  }
}