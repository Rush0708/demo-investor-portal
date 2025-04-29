using System;
using System.Threading.Tasks;
using Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HSBCSchrodersQRCodeCapture.Models.RequestModels;

namespace HSBCSchrodersQRCodeCapture.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompetitionController : ControllerBase
    {
        private readonly ICompetitionService _competitionService;    
        public CompetitionController(ICompetitionService competitionService)
        {
            _competitionService = competitionService;           
        }

        [HttpGet]
        [Route("Competitions/{competitionId}/{competitionCode}")]
        public async Task<IActionResult> CheckCompetitiondata(string competitionId,string competitionCode)
           {
            try
            {
                var getCompetitionDataRequest = new GetCompetitionDataRequest();
                getCompetitionDataRequest.competitionCode = competitionCode;
                getCompetitionDataRequest.competitionId = Convert.ToInt32(competitionId);
                var checkCompetitionCodeResult = await _competitionService.CheckInvestordata(getCompetitionDataRequest);
                return Ok(checkCompetitionCodeResult);
            }
            catch (Exception exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, exception);
            }
        }

        [HttpGet]
        [Route("GetCompetitionID/{competitionName}")]
        public async Task<int> GetCompetitionId(string competitionName)
        {
            try
            {                
                var CompetitionId = await _competitionService.GetCompetitionId(competitionName);
                return CompetitionId;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
