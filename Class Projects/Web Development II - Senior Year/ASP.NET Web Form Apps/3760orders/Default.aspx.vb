
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub btnConfirm_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnConfirm.Click
        lblConfirm.Text = "Thank you for your order!"
    End Sub

    Protected Sub btnCalculate_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnCalculate.Click
        Dim total As Decimal
        Dim tax As Decimal = 0.07
        Dim quantity As Integer
        quantity = txtQuant.Text
        Dim shipping As Decimal = 4.99
        If ddlProduct.SelectedIndex = 0 Then
            lbSummary.Items.Add("Please select a product")
        End If
        If ddlProduct.SelectedIndex = 1 Then
            total = (4 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 2 Then
            total = (4.5 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 3 Then
            total = (5 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 4 Then
            total = (2 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 5 Then
            total = (3 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 6 Then
            total = (3.5 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
        If ddlProduct.SelectedIndex = 7 Then
            total = (9 * tax * quantity) + tax + shipping
            lbSummary.Items.Add("Please confirm your order: ")
            lbSummary.Items.Add("Product: ")
            lbSummary.Items.Add(ddlProduct.SelectedItem)
            lbSummary.Items.Add("Quantity: ")
            lbSummary.Items.Add(quantity)
            lbSummary.Items.Add("Price: ")
            lbSummary.Items.Add(total.ToString("c"))
        End If
    End Sub

    Protected Sub ddlProduct_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles ddlProduct.SelectedIndexChanged
        If ddlProduct.SelectedIndex = 1 Then
            lblPrice.Text = "$4.00"
        End If
        If ddlProduct.SelectedIndex = 2 Then
            lblPrice.Text = "$4.50"
        End If
        If ddlProduct.SelectedIndex = 3 Then
            lblPrice.Text = "$5.00"
        End If
        If ddlProduct.SelectedIndex = 4 Then
            lblPrice.Text = "$2.00"
        End If
        If ddlProduct.SelectedIndex = 5 Then
            lblPrice.Text = "$3.00"
        End If
        If ddlProduct.SelectedIndex = 6 Then
            lblPrice.Text = "$3.50"
        End If
        If ddlProduct.SelectedIndex = 7 Then
            lblPrice.Text = "$9.00"
        End If
    End Sub
End Class
