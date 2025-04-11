using System;
using Carling_ClaimYourShirt.Models;
using Carling_ClaimYourShirt.Models.RequestModels;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class CompetitionDbContext : DbContext
    {
        public CompetitionDbContext(DbContextOptions<CompetitionDbContext> options)
            : base(options)
        { }

        public DbSet<ShirtSizeModel> ShirtSizeModel { get; set; }
        public DbSet<CountryModel> CountryModel { get; set; }
        public DbSet<RetailerModel> RetailerModel { get; set; }
        public DbSet<QuestionModel> QuestionModel { get; set; }
        public DbSet<AnswerModel> AnswerModel { get; set; }

        public DbSet<GetCompetitionIDRequest> GetCompetitionIDRequestModel { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ShirtSizeModel>().HasNoKey();
            modelBuilder.Entity<CountryModel>().HasNoKey();
            modelBuilder.Entity<RetailerModel>().HasNoKey();
            modelBuilder.Entity<QuestionModel>().HasNoKey();
            modelBuilder.Entity<AnswerModel>().HasNoKey();
            modelBuilder.Entity<GetCompetitionIDRequest>().HasNoKey();
        }

    }
}
