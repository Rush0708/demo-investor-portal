//using System;
//using System.Collections.Generic;
//using Carling_ClaimYourShirt.Models;
//using Carling_ClaimYourShirt.Repository.Interface;
//using Repository.Repository;
//using Repository;
//using Microsoft.EntityFrameworkCore;
//using System.Linq;

//namespace Carling_ClaimYourShirt.Repository.Repository
//{
//    public class RetailerRepository : GenericRepository<CompetitionDbContext>, IRetailerRepository
//    {
//        public RetailerRepository(CompetitionDbContext context) : base(context)
//        {

//        }
//        public IList<RetailerModel> LoadRetailers()
//        {
//            try
//            {
//                var result = _dbContext.RetailerModel.FromSqlRaw("EXEC usp_Retailers_Display").ToList();
//                return (IList<RetailerModel>)result;
//            }
//            catch(Exception e){
//                return null;

//            }
//        }
//    }
//}
