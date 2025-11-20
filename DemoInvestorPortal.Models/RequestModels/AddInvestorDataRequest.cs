using System;
using System.Collections.Generic;
using System.Text;

namespace DemoInvestorPortal.Models.RequestModels
{
    public class AddInvestorDataRequest
    {
        public string InvestorID { get; set; }
        public int Id { get; set; } 
        public string EmailAddress { get; set; }
        public string CountryCode { get; set; }
        public string PhoneNumber { get; set; }



    }
}
