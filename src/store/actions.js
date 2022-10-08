export default{
    sendRequest(context,payload){
        // const request={
        //     compoundName:payload.compoundName,
        //     molecularFormula:payload.molecularFormula,
        //     CAS_registryNumber:payload.CAS_registryNumber,
        //     smiles :payload.smiles
        // }
        // context.commit('sendRequest',request)
        context.commit('sendRequest',payload)

    }


}