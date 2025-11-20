using System;
using Microsoft.EntityFrameworkCore;
using DemoInvestorPortal.Models;

namespace Repository
{
    public class InvestorDbContext : DbContext
    {
        // Constructor to initialize the DbContext
        public InvestorDbContext(DbContextOptions<InvestorDbContext> options)
            : base(options)
        { }

        // DbSet for the Investor entity
        public DbSet<InvestorModel> Investors { get; set; }

        // Override OnModelCreating to configure entities
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure the Investor entity and map it to the "Investor" table in the database
            modelBuilder.Entity<InvestorModel>()
                .ToTable("Investor", "dbo") // Specifying the schema (dbo)
                .HasKey(i => i.Id); // Define primary key

            // Additional configuration for properties
            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.InvestorID)
                .HasMaxLength(50) // Adjust the length if necessary
                .IsRequired(); // Set as required if necessary

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.EmailAddress)
                .HasMaxLength(100) // Adjust as necessary
                .IsRequired(false); // Optional field

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.CountryCode)
                .HasMaxLength(10) // Adjust as necessary
                .IsRequired(false); // Optional field

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.PhoneNumber)
                .HasMaxLength(15) // Adjust as necessary
                .IsRequired(false); // Optional field

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.Submitted)
                .IsRequired(false); // Adjust as necessary for optional or required

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.FulfilmentDate)
                .IsRequired(false); // Adjust as necessary for optional or required

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.FeedItemId)
                .HasMaxLength(50) // Adjust as necessary
                .IsRequired(false); // Optional field

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.CreatedDate)
                .IsRequired(); // Adjust if required field

            modelBuilder.Entity<InvestorModel>()
                .Property(i => i.CreatedBy)
                .HasMaxLength(50) // Adjust as necessary
                .IsRequired(false); // Optional field
        }
    }

    // Define the Investor model according to the table structure
    public class InvestorModel
    {
        public int Id { get; set; }
        public string InvestorID { get; set; }
        public string EmailAddress { get; set; }
        public string CountryCode { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? Submitted { get; set; } // Nullable DateTime
        public DateTime? FulfilmentDate { get; set; } // Nullable DateTime
        public string FeedItemId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
    }
}
