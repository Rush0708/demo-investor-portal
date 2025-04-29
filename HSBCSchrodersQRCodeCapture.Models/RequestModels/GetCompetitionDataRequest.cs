using System.ComponentModel.DataAnnotations;

namespace HSBCSchrodersQRCodeCapture.Models.RequestModels
{
    public class GetCompetitionDataRequest
    {
        [Required]
        public string competitionCode { get; set; }
        [Required]
        public int competitionId { get; set; }
        
    }
}
