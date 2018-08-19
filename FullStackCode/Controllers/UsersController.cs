using FullStackCode.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FullStackCode.Controllers
{
 
    public class UsersController : ApiController
    {
        //// GET api/values
        
        // GET api/values/

        [HttpPost]
        public LoginViewModel GetByUsername(LoginViewModel value)
        {
            var login = new LoginViewModel();
            if(value.UserName== "admin")
            {
                login.UserName = "admin";
                login.Password = "admin";
                login.IsAdmin = true;
            }
            else
            {
                login.UserName = "emp";
                login.Password = "emp";
                login.IsAdmin = false;

            }
            return login;
        }

       





        [HttpGet]
  
        public List<EmployeeFeedbackViewModel> GetFeedBacks()
        {
            var listofEmployees = new List<EmployeeFeedbackViewModel>()
            {
                new EmployeeFeedbackViewModel() { FromEmployee="abc",ToEmployee="xyz",Feedback="Good Performance over the year."},
                 new EmployeeFeedbackViewModel() { FromEmployee="def",ToEmployee="uvw",Feedback="Good Performance over the year."},
                  new EmployeeFeedbackViewModel() { FromEmployee="ghi",ToEmployee="rst",Feedback="Good Performance over the year."}
            };
            return listofEmployees;
        }




        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
