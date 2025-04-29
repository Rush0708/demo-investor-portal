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
//    public class CountryRepository : GenericRepository<CompetitionDbContext>, ICountryRepository
//    {
//        public CountryRepository(CompetitionDbContext context) : base(context)
//        {

//        }
//        public IList<CountryModel> LoadCountries()
//        {
//            try
//            {
//                var result = _dbContext.CountryModel.FromSqlRaw("EXEC usp_Country_Display").ToList();
//                return (IList<CountryModel>)result;
//            }
//            catch (Exception e)
//            {
//                return null;
//            }
//        }
//    }
//}
