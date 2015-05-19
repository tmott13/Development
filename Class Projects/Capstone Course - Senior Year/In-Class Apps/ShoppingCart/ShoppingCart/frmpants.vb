Public Class frmpants

    Private Sub btnCart_Click(sender As System.Object, e As System.EventArgs) Handles btnCart.Click
        Select Case lstPants.SelectedIndex
            Case 0
                g_strName = g_strNAME_PANTS_ITEM_0
                g_decPrice = g_decPRICE_PANTS_ITEM_0

            Case 1
                g_strName = g_strNAME_PANTS_ITEM_1
                g_decPrice = g_decPRICE_PANTS_ITEM_1

            Case 2
                g_strName = g_strNAME_PANTS_ITEM_2
                g_decPrice = g_decPRICE_PANTS_ITEM_2
            Case 3
                g_strName = g_strNAME_PANTS_ITEM_3
                g_decPrice = g_decPRICE_PANTS_ITEM_3
            Case Else
                MessageBox.Show("Select a pair of pants!", "Selection needed")

        End Select
    End Sub

    Private Sub btnClose_Click(sender As System.Object, e As System.EventArgs) Handles btnClose.Click
        Me.Close()
    End Sub
End Class