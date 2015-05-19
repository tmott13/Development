
Partial Class Cake
    Inherits System.Web.UI.Page

    Protected Sub rblCake_SelectedIndexChanged(sender As Object, e As System.EventArgs) Handles rblCake.SelectedIndexChanged
        Dim myCake As String

        myCake = rblCake.SelectedItem.ToString

        If myCake = "Cake1" Then
            imgCake.ImageUrl = "images/cake1.jpg"
        End If
        If myCake = "Cake2" Then
            imgCake.ImageUrl = "images/cake2.jpg"
        End If
        If myCake = "Cake3" Then
            imgCake.ImageUrl = "images/cake3.jpg"
        End If
        If myCake = "Cake4" Then
            imgCake.ImageUrl = "images/cake4.jpg"
        End If
    End Sub

    Protected Sub btnConfirm_Click(sender As Object, e As System.EventArgs) Handles btnConfirm.Click
        Dim strFinalCake As String
        Dim strPrice As String

        strFinalCake = rblCake.SelectedItem.ToString
        strPrice = "$250.00"

        lblMessage.Text = "You selected: " & strFinalCake & " your total with delivery: " & strPrice & " Additional instructions: " & txtComments.Text & "Thank you for visiting our site!"
    End Sub
End Class
