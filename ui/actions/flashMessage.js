

const loading = () => {
  return {
    type: 'LOAD_PAGES_REQUEST',
    flashMessage : { msg : 'LOADING...' , type: 'INFO' } 
  }
}  

const success = () => ({
  type : 'LOAD_PAGES_SUCCESS',
  flashMessage : { msg : 'SUCCESSzz' , type: 'SUCCESS' }
})

const failure = () => ({
  type : 'LOAD_PAGES_FAILURE',
  flashMessage : { msg : 'Error : xxxxxxxx' , type: 'ERROR' } 
})

export { loading, success, failure }