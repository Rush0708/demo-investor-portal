using System;
using System.Collections.Generic;
using System.Text;

namespace DemoInvestorPortal.Models.RequestModels
{
    public class AddCustomerDataRequest
    {
        public int CompetitionId { get; set; }
        public string UniqueCode { get; set; }
        public int PrizeId { get; set; }
        public string Forename { get; set; }
        public string Surname { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string Town { get; set; }
        public string County { get; set; }
        public int CountryId { get; set; }
        public DateTime DOB { get; set; }
        public string Postcode { get; set; }
        public string EmailAddress { get; set; }
        public int? RetailerId { get; set; }
        public bool OptIn { get; set; }
        


    }
}
