class View {

    get home() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">All Employees</h1>
                    </div>
                </section>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>              
                <table class="table is-spaced is-bordered is-hoverable is-fullwidth is-small">
                  <thead>
                    <tr class="is-selected">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="employeeTable"></tbody>
              </table>`)
    }
    
     get add() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Add New Employee</h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">First Name</label>
                        <div class="control">
                            <input type="text" name="firstName" class="input" placeholder="First Name" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                            <input type="text" name="lastName" class="input" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="department" class="select" required>
                            <option value=""></option>
                            ${['IT','HR','Sales','Accounting'].map(title => `<option value="${title}">${title}</option>`).join('')}
                        </select>
                    </div>
                    <div class="field">
                        <label class="label">Job Title</label>
                        <div class="control">
                            <input type="text" name="jobTitle" class="input" placeholder="Ex: Dept Chair" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Salary</label>
                        <div class="control">
                            <input type="text" name="salary" class="input" placeholder="100" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Start Date</label>
                        <input type="date" name="startDate" class="input" required />
                    </div>
                    <div class="field"> 
                        <input type="reset" value="reset" class="button is-light is-danger is-outlined" />
                        <input type="button" value="submit" class="button is-link is-pulled-right" data-bind-event="click:saveEmployee" /> 
                    </div>
                    <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
                </form>`)
    }

    get update() {
        return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Update Employee</h1>
                    </div>
                </section>
                <form data-no-submit>
                    <div class="field">
                        <label class="label">First Name</label>
                        <div class="control">
                            <input type="text" name="firstName" class="input" placeholder="First Name" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Last Name</label>
                        <div class="control">
                            <input type="text" name="lastName" class="input" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Completed</label>
                        <select name="department" class="select" required>
                            <option value=""></option>
                            ${['IT','HR','Sales','Accounting'].map(title => `<option value="${title}">${title}</option>`).join('')}
                        </select>
                    </div>
                    <div class="field">
                        <label class="label">Job Title</label>
                        <div class="control">
                            <input type="text" name="jobTitle" class="input" placeholder="Ex: Dept Chair" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Salary</label>
                        <div class="control">
                            <input type="text" name="salary" class="input" placeholder="100" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Start Date</label>
                        <input type="date" name="startDate" class="input" required />
                    </div>
                    <div class="field">
                        <input type="reset" value="reset" class="button is-light is-danger is-outlined" />
                        <input type="button" value="submit" data-bind-event="click:updateEmployee" class="button is-link is-pulled-right" />
                    </div>
                    <p data-bind-model="updateResultMsg" data-bind-safe data-bind-class="{'is-success': 'isUpdated', 'is-danger': '!isUpdated' }" class="notification is-spaced"></p>
                </form>`)
    }
    
}