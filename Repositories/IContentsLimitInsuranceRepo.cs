using Models;

namespace contents_limit_insurance.Repositories
{
	public interface IContentsLimitInsuranceRepo
	{
		IEnumerable<ContentsLimitInsurance> GetItems();
		IEnumerable<ContentsLimitInsuranceCategory> GetCategories();
		bool UpdateItem(ContentsLimitInsurance contentsLimitInsurance);
		long AddItem(ContentsLimitInsurance contentsLimitInsurance);
		bool GenerateSampleItems();
		bool DeleteItem(long id);
	}
}