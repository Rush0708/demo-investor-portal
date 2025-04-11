using Carling_ClaimYourShirt.Models;
using System.Collections.Generic;

namespace Carling_ClaimYourShirt.Repository.Interface
{
    public interface IQuestionAnswerRepository
    {
        IList<QuestionModel> GetQuestions(int competitionId);
        IList<AnswerModel> GetAnswers(int questionId);
    }
}
