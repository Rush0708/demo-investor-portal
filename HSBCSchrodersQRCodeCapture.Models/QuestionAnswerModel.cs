using System;
using System.Collections.Generic;
using System.Text;

namespace HSBCSchrodersQRCodeCapture.Models
{
    public class QuestionModel
    {
        public int QuestionId { get; set; }
        public string Question { get; set; }
    }

    public class AnswerModel
    {
        public string Answer { get; set; }
        public bool CorrectAnswer { get; set; }

    }
}
