using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;

namespace Carling_ClaimYourShirt.Services.Interfaces
{
    public interface IQuestionAnswerService
    {
        IList<QuestionModel> GetQuestions(int competitionId);
        IList<AnswerModel> GetAnswers(int questionId);
    }
}
