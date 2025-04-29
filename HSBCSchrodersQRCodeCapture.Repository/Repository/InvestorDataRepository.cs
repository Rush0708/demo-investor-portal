using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;
using HSBCSchrodersQRCodeCapture.Repository.Interface;
using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using Repository.Repository;
using Repository;
using Microsoft.Extensions.Logging;

namespace HSBCSchrodersQRCodeCapture.Repository.Repository
{
    public class InvestorDataRepository : GenericRepository, IInvestorDataRepository
    {
        private readonly ILogger<InvestorDataRepository> _logger;

        public InvestorDataRepository(InvestorDbContext context, ILogger<InvestorDataRepository> logger)
            : base(context)
        {
            _logger = logger;
        }
        public async Task<int> CheckInvestorData(GetInvestorDataRequest request)
        {
            try
            {
                int i = 0;
                var InvestorId = new Microsoft.Data.SqlClient.SqlParameter("@InvestorId", request.InvestorID);
                var idOutputParam = new Microsoft.Data.SqlClient.SqlParameter("@Id", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };
                var resultQLParam = new Microsoft.Data.SqlClient.SqlParameter("@Result", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };
                var result = _dbContext.Database.ExecuteSqlRaw(
                    "EXEC usp_Validation_Investor @InvestorId={0},  @Id={1}, @Result={2} out", InvestorId, idOutputParam, resultQLParam);
                if (resultQLParam.Value != DBNull.Value)
                {
                    i = (int)resultQLParam.Value;
                }

                return i;
            }
            catch (Exception e)
            {
                return 1;
            }
        }

        //public async Task<int> CheckInvestorData(GetInvestorDataRequest request)
        //{
        //    try
        //    {
        //        if (string.IsNullOrEmpty(request?.InvestorID))
        //        {
        //            _logger.LogWarning("Investor ID is null or empty.");
        //            return 0;
        //        }

        //        var investorIdParam = new SqlParameter("@InvestorId", SqlDbType.NVarChar, 15)
        //        {
        //            Value = request.InvestorID
        //        };

        //        var idOutputParam = new SqlParameter
        //        {
        //            ParameterName = "@Id",
        //            SqlDbType = SqlDbType.Int,
        //            Direction = ParameterDirection.Output
        //        };

        //        var resultOutputParam = new SqlParameter
        //        {
        //            ParameterName = "@Result",
        //            SqlDbType = SqlDbType.Int,
        //            Direction = ParameterDirection.Output
        //        };

        //        await _dbContext.Database.ExecuteSqlRawAsync(
        //            "EXEC usp_Validation_Investor @InvestorId, @Id OUTPUT, @Result OUTPUT",
        //            investorIdParam, idOutputParam, resultOutputParam
        //        );

        //        int result = (int)resultOutputParam.Value;

        //        return result == 0 ? 1 : 0;
        //    }
        //    catch (SqlException sqlEx)
        //    {
        //        _logger.LogError(sqlEx, "SQL exception occurred while validating investor data.");
        //        return 0;
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError(ex, "An unexpected error occurred while checking investor data.");
        //        return 0;
        //    }
        //}


    }
}
