//using System.Threading.Tasks;
//using Repository.Interface;
//using Microsoft.EntityFrameworkCore;
//using Carling_ClaimYourShirt.Models.RequestModels;
//using System;
//using System.Linq;

//namespace Repository.Repository
//{
//    public class CompetitionRepository : GenericRepository, ICompetitionRepository
//    {
//        public CompetitionRepository(CompetitionDbContext context) : base(context)
//        {
//        }

//        public async Task<int> CheckCompetitiondata(GetCompetitionDataRequest getCompetitionDataRequest)
//        {
//            try
//            {
//                int i = 0;
//                var UniqueCodeSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@UniqueCode", getCompetitionDataRequest.competitionCode);
//                var CompetitionIdSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@CompetitionId", getCompetitionDataRequest.competitionId);
//                var resultQLParam = new Microsoft.Data.SqlClient.SqlParameter("@Result", System.Data.SqlDbType.Int) { Direction = System.Data.ParameterDirection.Output };
//                var result = _dbContext.Database.ExecuteSqlRaw(
//                    "EXEC usp_UniqueCode_Validate @UniqueCode={0}, @CompetitionId={1}, @Result={2} out", UniqueCodeSQLParam, CompetitionIdSQLParam, resultQLParam);
//                if (resultQLParam.Value != DBNull.Value)
//                {
//                    i = (int)resultQLParam.Value;
//                }

//                return i;
//            }
//            catch(Exception e)
//            {
//                return 0;
//            }
//        }

//        public async Task<int> GetCompetitionId(string competitionName)
//        {
//            try
//            {
//                var compNameSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@CompetitionName", competitionName);
//                var result = _dbContext.GetCompetitionIDRequestModel.FromSqlRaw("EXEC usp_Competition_GetId @CompetitionName={0}", compNameSQLParam).ToList();
//                return result[0].CompetitionID;
//            }
//            catch (Exception e)
//            {
//                return 0;
//            }
           
//        }


//    }
//}
