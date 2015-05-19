
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub btnClear_Click(sender As Object, e As System.EventArgs) Handles btnClear.Click
        txtAnnualRate.Text = ""
        txtYears.Text = ""
        lblValue.Text = String.Empty
        lblMonths.Text = String.Empty
        lblRate.Text = String.Empty
        lblTotal.Text = String.Empty
        lblYears.Text = String.Empty

    End Sub

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If Not IsPostBack Then
            For i As Integer = 50 To 500 Step 50
                ddlInvestment.Items.Add(i)
            Next

        End If
    End Sub

    Protected Sub btnCalculate_Click(sender As Object, e As System.EventArgs) Handles btnCalculate.Click
        Dim months As Integer
        Dim interestRate, monthlyInvestment As Decimal
        Dim futureValue As Decimal

        If IsValid Then
            months = txtYears.Text * 12
            interestRate = txtAnnualRate.Text / 12 / 100
            monthlyInvestment = ddlInvestment.SelectedValue
            futureValue = Me.FutureValue(months, interestRate, monthlyInvestment)
            lblValue.Text = FormatCurrency(futureValue)
            lblRate.Text = txtAnnualRate.Text
            lblYears.Text = txtYears.Text
            lblMonths.Text = FormatCurrency(monthlyInvestment)
            lblTotal.Text = FormatCurrency(futureValue)



        End If



    End Sub

    Private Function FutureValue(ByVal months As Integer, ByVal interestRate As Decimal, ByVal monthlyInvestment As Decimal) As Decimal
        For i As Integer = 1 To months
            FutureValue = (FutureValue + monthlyInvestment) * (1 + interestRate)
        Next
    End Function
End Class
