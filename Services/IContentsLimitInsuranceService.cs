using Models;

namespace contents_limit_insurance.Services
{
	public interface IContentsLimitInsuranceService
	{
		IEnumerable<ContentsLimitInsurance> GetItems();
		IEnumerable<ContentsLimitInsuranceCategory> GetCategories();
		bool UpdateItem(ContentsLimitInsurance contentsLimitInsurance);
		long AddItem(ContentsLimitInsurance contentsLimitInsurance);
		IEnumerable<ContentsLimitInsurance> GenerateSampleItems();
		bool DeleteItem(long id);
	}
}