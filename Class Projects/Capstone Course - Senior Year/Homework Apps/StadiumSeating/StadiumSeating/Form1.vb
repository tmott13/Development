Public Class Form1

    Private Sub btnExit_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnClear.Click
        txtClassA.Clear()
        txtClassB.Clear()
        txtClassC.Clear()

        lblClassA.Text = String.Empty
        lblClassB.Text = String.Empty
        lblClassC.Text = String.Empty
        lblTotalRev.Text = String.Empty

        txtClassA.Focus()


    End Sub

    Private Sub btnCalculate_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnCalculate.Click
        Dim classA As Integer = 15
        Dim classB As Integer = 12
        Dim classC As Integer = 9
        Dim intClassARev As Integer
        Dim intClassBRev As Integer
        Dim intClassCRev As Integer
        Dim decTotalRev As Decimal



        'Check Class A
        If IsNumeric(txtClassA.Text) = False Then
            MessageBox.Show("Please enter a number in Class A")
        ElseIf txtClassA.Text < 0 Then
            MessageBox.Show("Please enter value greater than 0 in Class A")
        Else
            intClassARev = CInt(txtClassA.Text) * classA
            lblClassA.Text = intClassARev.ToString("c")
        End If

        'Check Class B
        If IsNumeric(txtClassB.Text) = False Then
            MessageBox.Show("Please enter a number in Class B")
        ElseIf txtClassB.Text < 0 Then
            MessageBox.Show("Please enter value greater than 0 in Class B")
        Else
            intClassBRev = CInt(txtClassB.Text) * classB
            lblClassB.Text = intClassBRev.ToString("c") 
        End If

        'Check Class C
        If IsNumeric(txtClassC.Text) = False Then
            MessageBox.Show("Please enter a number in Class C")
        ElseIf txtClassC.Text < 0 Then
            MessageBox.Show("Please enter value greater than 0 in Class C")
        Else
            intClassCRev = CInt(txtClassC.Text) * classC
            lblClassC.Text = intClassCRev.ToString("c")
        End If

        'Calculate total
        decTotalRev = CDec(intClassARev) + CDec(intClassBRev) + CDec(intClassCRev)
        lblTotalRev.Text = decTotalRev.ToString("c")

    End Sub
End Class
