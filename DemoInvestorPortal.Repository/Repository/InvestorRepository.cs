using DemoInvestorPortal.Models.RequestModels;
using DemoInvestorPortal.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using Repository.Repository;
using System;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Repository;

namespace DemoInvestorPortal.Repository.Repository
{
    public class InvestorRepository : GenericRepository, IInvestorRepository
    {
        public InvestorRepository(InvestorDbContext context) : base(context) { }

        public async Task<int> AddInvestor(AddInvestorDataRequest request)
        {
            try
            {
                
                var investorIdParam = new SqlParameter("@InvestorId", request.InvestorID);
                var idParam = new SqlParameter("@Id", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };
                var resultParam = new SqlParameter("@Result", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };

                var result = await _dbContext.Database.ExecuteSqlRawAsync(
                    "EXEC usp_Validation_Investor @InvestorId = {0}, @Id = {1} OUTPUT, @Result = {2} OUTPUT",
                    investorIdParam, idParam, resultParam);

                int validationResult = (resultParam.Value != DBNull.Value) ? (int)resultParam.Value : 1;

                if (validationResult == 1)
                    return -1;

               
                int investorDbId = (idParam.Value != DBNull.Value) ? (int)idParam.Value : 0;

                
                var emailParam = new SqlParameter("@EmailAddress", request.EmailAddress ?? (object)DBNull.Value);
                var countryCodeParam = new SqlParameter("@CountryCode", request.CountryCode ?? (object)DBNull.Value);
                var phoneParam = new SqlParameter("@PhoneNumber", request.PhoneNumber);
                var updateResultParam = new SqlParameter("@Result", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };

                await _dbContext.Database.ExecuteSqlRawAsync(
                    "EXEC usp_Update_Investor @Id = {0}, @EmailAddress = {1}, @CountryCode = {2}, @PhoneNumber = {3}, @Result = @Result OUT",
                    investorDbId, emailParam, countryCodeParam, phoneParam, updateResultParam);

                
                return (updateResultParam.Value != DBNull.Value) ? (int)updateResultParam.Value : 1;
            }
            catch (Exception)
            {
                return -2;  
            }
        }
    }
}
