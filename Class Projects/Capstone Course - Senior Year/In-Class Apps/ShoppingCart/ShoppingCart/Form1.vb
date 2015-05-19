Public Class Form1

    Private Sub btnSnowBoots_Click(sender As System.Object, e As System.EventArgs) Handles btnSnowBoots.Click
        Dim frmSnowBoots As New frmboots

        frmSnowBoots.ShowDialog()
    End Sub

    Private Sub btnSnowPants_Click(sender As System.Object, e As System.EventArgs) Handles btnSnowPants.Click
        Dim frmSnowPants As New frmpants

        frmSnowPants.ShowDialog()
    End Sub

    Private Sub Form1_Activated(sender As Object, e As System.EventArgs) Handles Me.Activated
        If Not (g_strName = String.Empty And g_decPrice = 0D) Then
            lstShopping.Items.Add(g_strName)
            UpdateDisplayTotals()

        End If
    End Sub

    Sub UpdateDisplayTotals()
        lblSubTotal.Text = CalcSubtotal.ToString("c")
        lblTax.Text = CalcSalesTax.ToString("c")
        lblShipping.Text = CalcShipping.ToString("c")
        lblTotal.Text = CalcTotal.ToString("c")

        g_decPrice = 0D
        g_strName = String.Empty
    End Sub

    Function CalcTotal() As Decimal
        Return CalcSubTotal() + CalcSalesTax() + CalcShipping()

    End Function

    Function CalcSubtotal() As Decimal
        Dim decSubtotal As Decimal = 0D
        For intIndex = 0 To lstShopping.Items.Count - 1
            Select Case lstShopping.Items.Item(intIndex).ToString()
                Case g_strNAME_BOOTS_ITEM_0
                    g_decPrice = g_decPRICE_BOOTS_ITEM_0
                Case g_strNAME_BOOTS_ITEM_1
                    g_decPrice = g_decPRICE_BOOTS_ITEM_1
                Case g_strNAME_BOOTS_ITEM_2
                    g_decPrice = g_decPRICE_BOOTS_ITEM_2
                Case g_strNAME_BOOTS_ITEM_3
                    g_decPrice = g_decPRICE_BOOTS_ITEM_3
                Case g_strNAME_PANTS_ITEM_0
                    g_decPrice = g_decPRICE_PANTS_ITEM_0
                Case g_strNAME_PANTS_ITEM_1
                    g_decPrice = g_decPRICE_PANTS_ITEM_1
                Case g_strNAME_PANTS_ITEM_2
                    g_decPrice = g_decPRICE_PANTS_ITEM_2
                Case g_strNAME_PANTS_ITEM_3
                    g_decPrice = g_decPRICE_PANTS_ITEM_3
            End Select
            decSubtotal += g_decPrice

        Next
        Return decSubtotal
    End Function

    Function CalcSalesTax() As Decimal
        Return CalcSubtotal() * g_decSALES_TAX
    End Function

    Function CalcShipping() As Decimal
        Dim decShipping As Decimal = 0D
        For intIndex = 0 To lstShopping.Items.Count - 1
            decShipping += g_decSHIPPING_PER_ITEM
        Next
        Return decShipping
    End Function


    Private Sub Form1_Load(sender As System.Object, e As System.EventArgs) Handles MyBase.Load

    End Sub

    Private Sub btnRemove_Click(sender As System.Object, e As System.EventArgs) Handles btnRemove.Click
        Try
            With lstShopping
                .Items.RemoveAt(.SelectedIndex)
            End With
            UpdateDisplayTotals()
        Catch ex As Exception
            MessageBox.Show("Select an item to remove", "selection needed")

        End Try
    End Sub

    Private Sub btnExit_Click(sender As System.Object, e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
End Class
