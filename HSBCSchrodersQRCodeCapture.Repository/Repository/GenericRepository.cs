using Repository.Interface;

namespace Repository.Repository
{
    public class GenericRepository : IGenericRepository
    {
        protected readonly InvestorDbContext _dbContext;
        public GenericRepository(InvestorDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    }
}
