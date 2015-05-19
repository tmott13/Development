Public Class Form1

    Private Sub btnExit_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnClear.Click
        txtPackA.Text = String.Empty
        txtPackB.Text = String.Empty
        txtPackC.Text = String.Empty

        lblOutput.Text = String.Empty

        txtPackA.Focus()
    End Sub

    Private Sub btnCalculate_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnCalculate.Click
        Dim decPackageA As Decimal = 99.0
        Dim decPackageB As Decimal = 199.0
        Dim decPackageC As Decimal = 299.0
        Dim decDiscount As Decimal
        Dim decTotalPriceA As Decimal
        Dim decTotalPriceB As Decimal
        Dim decTotalPriceC As Decimal
        Dim decGrandTotal As Decimal

        If Not IsNumeric(txtPackA.Text) Then
            MessageBox.Show("Please enter a whole positive integer", "Input Error")
        ElseIf txtPackA.Text < 0 Then
            MessageBox.Show("Please enter a whole positive integer OR 0", "Input Error")

        ElseIf Not IsNumeric(txtPackB.Text) And txtPackB.Text < 0 Then
            MessageBox.Show("Please enter a whole positive integer", "Input Error")
        ElseIf txtPackB.Text < 0 Then
            MessageBox.Show("Please enter a whole positive integer OR 0", "Input Error")
        ElseIf Not IsNumeric(txtPackC.Text) And txtPackC.Text < 0 Then
            MessageBox.Show("Please enter a whole positive integer", "Input Error")
        ElseIf txtPackC.Text < 0 Then
            MessageBox.Show("Please enter a whole positive integer OR 0", "Input Error")
        Else
            Select Case txtPackA.Text Or txtPackB.Text Or txtPackC.Text
                Case 0 To 9
                    decDiscount = 0
                    decTotalPriceA = txtPackA.Text * decPackageA * decDiscount
                    decTotalPriceB = txtPackB.Text * decPackageB * decDiscount
                    decTotalPriceC = txtPackC.Text * decPackageC * decDiscount
                Case 10 To 19
                    decDiscount = 0.2
                    decTotalPriceA = txtPackA.Text * decPackageA * decDiscount
                    decTotalPriceB = txtPackB.Text * decPackageB * decDiscount
                    decTotalPriceC = txtPackC.Text * decPackageC * decDiscount
                Case 20 To 49
                    decDiscount = 0.3
                    decTotalPriceA = txtPackA.Text * decPackageA * decDiscount
                    decTotalPriceB = txtPackB.Text * decPackageB * decDiscount
                    decTotalPriceC = txtPackC.Text * decPackageC * decDiscount
                Case 50 To 99
                    decDiscount = 0.4
                    decTotalPriceA = txtPackA.Text * decPackageA * decDiscount
                    decTotalPriceB = txtPackB.Text * decPackageB * decDiscount
                    decTotalPriceC = txtPackC.Text * decPackageC * decDiscount
                Case Else
                    decDiscount = 0.5
                    decTotalPriceA = txtPackA.Text * decPackageA * decDiscount
                    decTotalPriceB = txtPackB.Text * decPackageB * decDiscount
                    decTotalPriceC = txtPackC.Text * decPackageC * decDiscount
            End Select

            decGrandTotal = decTotalPriceA + decTotalPriceB + decTotalPriceC
            lblOutput.Text &= ("Package A: " + decTotalPriceA.ToString("c")) + vbCrLf & ("Package B: " + decTotalPriceB.ToString("c")) & vbCrLf &
            ("Package C: " + decTotalPriceC.ToString("c")) + vbCrLf & ("Grand total: " + decGrandTotal.ToString("c"))

        End If
    End Sub
End Class
