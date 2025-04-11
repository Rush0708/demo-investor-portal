using Repository.Interface;

namespace Repository.Repository
{
    public class GenericRepository : IGenericRepository
    {
        protected readonly CompetitionDbContext _dbContext;
        public GenericRepository(CompetitionDbContext dbContext) 
        {
            _dbContext = dbContext;
        }

    }
}
