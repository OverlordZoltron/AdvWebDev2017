class Components {
    
   static employeeTable(data){
        if ( !Array.isArray(data) ) return Promise.resolve('')
        return Promise.resolve(`${data.map(row=>                                         
                    `<tr>
                        <td>${row.firstName}</td>
                        <td>${row.lastName}</td>
                        <td>${row.department}</td>
                        <td>${row.jobTitle}</td>
                        <td>$${row.salaryFormatted}</td>
                        <td>${row.startDateFormatted}</td>
                        <td><button data-id="${row._id}" data-bind-event="click:deleteTodo" class="button is-danger is-outlined">Delete</button></td>
                        <td><button data-id="${row._id}" data-bind-event="click:goToUpdatePage" class="button is-link is-outlined">Update</button></td>
                    </tr>`
                ).join('')}`)
    }
    
}