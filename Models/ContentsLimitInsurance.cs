namespace Models
{
    public class ContentsLimitInsurance
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public ContentsLimitInsuranceCategory? Category { get; set; }
    }
}

