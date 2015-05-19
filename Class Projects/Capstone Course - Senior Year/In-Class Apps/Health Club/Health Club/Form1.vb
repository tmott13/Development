Public Class Form1

    Private Sub btnExit_Click(sender As System.Object, e As System.EventArgs) Handles btnExit.Click
        Me.Close()

    End Sub

    Private Sub btnClear_Click(sender As System.Object, e As System.EventArgs) Handles btnClear.Click
        radAdult.Checked = True
        chkKarate.Checked = False
        chkPersTrain.Checked = False
        chkYoga.Checked = False
        txtMonths.Clear()
        lblMonthlyFee.Text = String.Empty
        lblTotal.Text = String.Empty



    End Sub

    Private Sub Form1_Load(sender As System.Object, e As System.EventArgs) Handles MyBase.Load
        radAdult.Checked = True

    End Sub

    Private Sub btnCalculate_Click(sender As System.Object, e As System.EventArgs) Handles btnCalculate.Click
        Dim intMonths As Integer
        Dim decBase As Decimal
        Dim decDiscount As Decimal
        Dim decDiscount4to6 As Decimal = 0.05
        Dim decDiscount7to9 As Decimal = 0.08
        Dim decDiscount10orMore As Decimal = 0.1
        Dim decTotalFee As Decimal


        Try
            intMonths = CInt(txtMonths.Text)
        Catch ex As Exception
            MessageBox.Show("Months should be a valid integer 1 to 24", "input error")
            Return
        End Try

        If (intMonths < 1) Or (intMonths > 24) Then
            MessageBox.Show("Months must be a valid integer 1-24", "input error")
            Return
        End If

        If radAdult.Checked = True Then
            decBase = 40
        ElseIf radChild.Checked = True Then
            decBase = 20
        ElseIf radStudent.Checked = True Then
            decBase = 25
        ElseIf radSenCitizen.Checked = True Then
            decBase = 30
        End If

        If chkYoga.Checked = True Then
            decBase += 10
        End If

        If chkKarate.Checked = True Then
            decBase += 30
        End If

        If chkPersTrain.Checked = True Then
            decBase += 50
        End If

        Select Case intMonths
            Case Is <= 3
                decDiscount = 0
            Case 4 To 6
                decDiscount = decBase * decDiscount4to6
            Case 7 To 9
                decDiscount = decBase * decDiscount7to9
            Case Is >= 10
                decDiscount = decBase * decDiscount10orMore

        End Select

        decBase -= decDiscount
        decTotalFee = decBase * intMonths

        lblMonthlyFee.Text = FormatCurrency(decBase)
        lblTotal.Text = FormatCurrency(decTotalFee)
    End Sub
End Class
