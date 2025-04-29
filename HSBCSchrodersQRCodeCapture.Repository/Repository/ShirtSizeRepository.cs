//using System;
//using System.Collections.Generic;
//using System.Text;
//using Repository.Interface;
//using Microsoft.EntityFrameworkCore;
//using Carling_ClaimYourShirt.Models;
//using System.Linq;

//namespace Repository.Repository
//{
//    public class ShirtSizeRepository: GenericRepository<CompetitionDbContext>, IShirtSizeRepository
//    {
//        public ShirtSizeRepository(CompetitionDbContext context) : base(context)
//        {

//        }

//        public IList<ShirtSizeModel> LoadShirtsizes(int competitionid)
//        {
//            try
//            {
//                var comIdSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@CompetitionId", competitionid);
//                var result = _dbContext.ShirtSizeModel.FromSqlRaw("EXEC usp_Prizes_Display @CompetitionId={0}", comIdSQLParam).ToList();
//                return (IList<ShirtSizeModel>)result;
//            }
//            catch (Exception e)
//            {
//                return null;
//            }
//        }
//    }
//}
