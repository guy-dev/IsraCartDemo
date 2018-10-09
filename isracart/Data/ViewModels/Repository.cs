using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IsraCart.Data.ViewModels
{
	[Serializable]
    public class Repository
    {
	    public int Id { get; set; }
	    public string Name { get; set; }
	    public string HtmlUrl { get; set; }
	    public string Description { get; set; }
	    public string OwnerAvatalUrl { get; set; }
	    public string OwnerId { get; set; }

	    public override bool Equals(object obj)
	    {
		    return ((Repository) obj).Id == Id;
	    }
    }
}
