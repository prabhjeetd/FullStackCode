using FullStackCode.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FullStackCode.Controllers
{
    public class FeedBackController : ApiController
    {

        [HttpPost]
        public bool CreateFeedBack(EmployeeFeedbackViewModel userName)
        {
            var login = new EmployeeFeedbackViewModel() { FromEmployee = userName.FromEmployee, ToEmployee = userName.ToEmployee, Feedback = userName.Feedback };

            return true;
        }
    }
}
