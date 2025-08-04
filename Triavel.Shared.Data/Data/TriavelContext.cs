using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Triavel.Shared.Data.Data
{
    internal class TriavelContext : DbContext
    {
        private string _connectionStringRemote = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Triavel;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured)
                return;

            optionsBuilder
                .UseSqlServer(_connectionStringRemote)
                .UseLazyLoadingProxies();
        }
    }
}
