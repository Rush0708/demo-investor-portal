using System.ComponentModel.DataAnnotations;

namespace Carling_ClaimYourShirt.Models.RequestModels
{
    public class GetCompetitionDataRequest
    {
        [Required]
        public string competitionCode { get; set; }
        [Required]
        public int competitionId { get; set; }
        
    }
}
