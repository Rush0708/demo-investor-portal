using Carling_ClaimYourShirt.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public interface  ICompetitionRepository
    {
        Task<int> CheckCompetitiondata(GetCompetitionDataRequest getCompetitionDataRequest);
        Task<int> GetCompetitionId(string competitionName);


    }
}
