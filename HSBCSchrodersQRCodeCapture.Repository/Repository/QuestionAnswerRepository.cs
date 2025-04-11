using System;
using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;
using Carling_ClaimYourShirt.Repository.Interface;
using Repository.Repository;
using Repository;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Carling_ClaimYourShirt.Repository.Repository
{
    public class QuestionAnswerRepository : GenericRepository, IQuestionAnswerRepository
    {
        public QuestionAnswerRepository(CompetitionDbContext context) : base(context)
        {

        }
        public IList<QuestionModel> GetQuestions(int competitionId)
        {
            try
            {
                var competitionIdSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@CompetitionId", competitionId);
                var result = _dbContext.QuestionModel.FromSqlRaw("EXEC usp_Questions @CompetitionId={0}", competitionIdSQLParam).ToList();
                return (IList<QuestionModel>)result;
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public IList<AnswerModel> GetAnswers(int questionId)
        {
            try
            {
                var questionIdSQLParam = new Microsoft.Data.SqlClient.SqlParameter("@QuestionId", questionId);
                var result = _dbContext.AnswerModel.FromSqlRaw("EXEC usp_Answers @QuestionId={0}", questionIdSQLParam).ToList();
                return (IList<AnswerModel>)result;
            }
            catch (Exception e)
            {
                return null;

            }
        }
    }
}
