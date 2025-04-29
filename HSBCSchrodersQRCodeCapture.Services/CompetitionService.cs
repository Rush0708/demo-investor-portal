using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using Repository.Interface;
using Services.Interfaces;
using System.Threading.Tasks;

namespace Services
{
    public class InvestorDataService : ICompetitionService
    {
        private readonly ICompetitionRepository _competitionRepository;
        public InvestorDataService(ICompetitionRepository competitionRepository)
        {
            _competitionRepository = competitionRepository;
        }
        public async Task<int> CheckInvestordata(GetCompetitionDataRequest getCompetitionDataRequest)
        {
             var dataExists=   await _competitionRepository.CheckCompetitiondata(getCompetitionDataRequest);
            return dataExists;
        }

        public async Task<int> GetCompetitionId(string competitionName)
        {
            var competitionId = await  _competitionRepository.GetCompetitionId(competitionName);
            return competitionId;
        }
    }
}
