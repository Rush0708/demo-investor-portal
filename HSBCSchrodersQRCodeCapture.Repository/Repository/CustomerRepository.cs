using Carling_ClaimYourShirt.Models.RequestModels;
using Carling_ClaimYourShirt.Repository.Interface;
using Repository.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Repository;

namespace Carling_ClaimYourShirt.Repository.Repository
{
    public class CustomerRepository : GenericRepository, ICustomerRepository
    {
        public CustomerRepository(CompetitionDbContext context) : base(context) { }
        public async Task<int> AddCustomer(AddCustomerDataRequest addCustomerDataRequest)
        {
            
            try
            {               
                int i = 0;
                var resultQLParam = new Microsoft.Data.SqlClient.SqlParameter("@Result", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };
                _dbContext.Database.ExecuteSqlRaw(
                  "EXEC usp_Entries_Redeem {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12},{13},{14},{15},{16},{17},@Result={18} out",
                  addCustomerDataRequest.CompetitionId,
                  addCustomerDataRequest.UniqueCode,
                  addCustomerDataRequest.Forename,
                  addCustomerDataRequest.Surname,                  
                  addCustomerDataRequest.AddressLine1,
                  addCustomerDataRequest.AddressLine2,
                  addCustomerDataRequest.AddressLine3,
                  addCustomerDataRequest.Town,
                  addCustomerDataRequest.County,
                  addCustomerDataRequest.CountryId,
                  addCustomerDataRequest.Postcode,
                  addCustomerDataRequest.DOB,
                  addCustomerDataRequest.EmailAddress,
                  addCustomerDataRequest.RetailerId,
                  addCustomerDataRequest.OptIn,
                  addCustomerDataRequest.PrizeId,
                  "Online",
                  null,
                  resultQLParam);
                if (resultQLParam.Value != DBNull.Value)
                {
                    i = (int)resultQLParam.Value;
                }
                return i;
            }
            catch (Exception ex)
            {
                return 0;

            }
        }

        
    }
}
