class Model extends BaseModel {

    constructor() {
        super()
        this.APIS = {
            Employee: `//${window.location.hostname}:3001/api/v1/employees/`
        }
    }

    /*
     getReviewList() {
     return this.http.get(this.APIS.Reviews)
     .then( data => {
     data.forEach((review) => {
     review.createdOnFormated = this.formatDate(review.createdOn)
     })
     return Components.todoTable(data).then(html => { return this.dataBindModel.todoTable = html })
     })
     }
     */

    getEmployeeList() {
        return this.http.get(this.APIS.Employee)
                .then(data => {
                    data.forEach((employee) => {
                        employee.startDateFormatted = this.formatDate(employee.startDate)
                        employee.salaryFormatted = this.formatNumber(employee.salary)
                    })
                    return Components.employeeTable(data).then(html => {
                        return this.dataBindModel.employeeTable = html
                    })
                })
    }

    deleteEmployee(evt) {
        const url = `${this.APIS.Employee}${evt.target.dataset.id}`
        return this.http.delete(url)
                .then(() => {
                    return this.dataBindModel.deleteResultMsg = 'Employee Deleted'
                }).catch(err => {
            return this.dataBindModel.deleteResultMsg = 'Employee was NOT Deleted'
        }).then(() => {
            return this.getEmployeeList()
        })

    }

    saveEmployee(evt) {

        let form = evt.target.form
        if (!form.checkValidity()) {
            this.dataBindModel.saveResultMsg = 'All fields are required'
            return Promise.resolve()
        }
        /*
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         department: req.body.department,
         startDate: new Date(req.body.startDate + ' EDT'),
         jobTitle: req.body.jobTitle,
         salary: req.body.salary
         */
        const data = {
            firstName: this.dataBindModel.firstName,
            lastName: this.dataBindModel.lastName,
            department: this.dataBindModel.department,
            startDate: new Date(this.dataBindModel.startDate + ' EDT'),
            jobTitle: this.dataBindModel.jobTitle,
            salary: this.dataBindModel.salary
        }
        return this.http.post(this.APIS.Employee, data)
                .then(data => {
                    this.dataBindModel.saveResultMsg = 'Employee Saved'
                    return data
                }).catch(err => {
            this.dataBindModel.saveResultMsg = 'Employee was NOT Saved'
            return err
        })
    }

    goToUpdatePage(evt) {
        this.redirect('update', {id: evt.target.dataset.id})
        return Promise.resolve()
    }

    updatePageLoad() {
        const url = `${this.APIS.Employee}${this.urlParams().get('id')}`
        return this.http.get(url).then(data => {
            var date = new Date(data.startDate);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            if (day < 10)
                var day = '0' + day
            if (month < 10)
                var month = '0' + month
            var myDate = year + "-" + month + "-" + day;
            this.dataBindModel = {firstName: data.firstName, lastName: data.lastName, department: data.department, startDate: myDate, jobTitle: data.jobTitle, salary: data.salary, _id: data._id}
            return data
        })
    }

    updateEmployee(evt) {
        let form = evt.target.form
        if (!form.checkValidity()) {
            this.dataBindModel.updateResultMsg = 'All fields are required'
            return Promise.resolve()
        }
        const data = {
            firstName: this.dataBindModel.firstName,
            lastName: this.dataBindModel.lastName,
            department: this.dataBindModel.department,
            startDate: new Date(this.dataBindModel.startDate + ' EDT'),
            jobTitle: this.dataBindModel.jobTitle,
            salary: this.dataBindModel.salary
        }
        const url = `${this.APIS.Employee}${this.dataBindModel._id}`
        return this.http.put(url, data)
                .then(data => {
                    this.dataBindModel.updateResultMsg = 'Employee updated'
                    return data
                }).catch(err => {
            this.dataBindModel.updateResultMsg = 'Employee was NOT updated'
            return err
        })
    }

    get isDeleted() {
        const msg = this.dataBindModel.deleteResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1
    }

    get isAdded() {
        const msg = this.dataBindModel.saveResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

    get isUpdated() {
        const msg = this.dataBindModel.updateResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

}