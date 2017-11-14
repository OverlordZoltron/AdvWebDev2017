Object.assign(BaseModel.prototype, {
    formatNumber(number) {
       return new Intl.NumberFormat({ style: 'currency', currency: 'USD'}).format(number)
    },
    formatDate(date) {
       const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
       return new Date(date).toLocaleDateString('en-US', options) 
   }
})