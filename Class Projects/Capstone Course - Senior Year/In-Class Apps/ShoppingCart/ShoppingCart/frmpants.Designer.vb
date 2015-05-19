<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmpants
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.btnClose = New System.Windows.Forms.Button()
        Me.btnCart = New System.Windows.Forms.Button()
        Me.lstPants = New System.Windows.Forms.ListBox()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.btnClose)
        Me.GroupBox1.Controls.Add(Me.btnCart)
        Me.GroupBox1.Controls.Add(Me.lstPants)
        Me.GroupBox1.Location = New System.Drawing.Point(13, 12)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(481, 326)
        Me.GroupBox1.TabIndex = 1
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Snow Pants Selection"
        '
        'btnClose
        '
        Me.btnClose.Location = New System.Drawing.Point(313, 256)
        Me.btnClose.Name = "btnClose"
        Me.btnClose.Size = New System.Drawing.Size(75, 23)
        Me.btnClose.TabIndex = 2
        Me.btnClose.Text = "Exit"
        Me.btnClose.UseVisualStyleBackColor = True
        '
        'btnCart
        '
        Me.btnCart.Location = New System.Drawing.Point(72, 256)
        Me.btnCart.Name = "btnCart"
        Me.btnCart.Size = New System.Drawing.Size(75, 23)
        Me.btnCart.TabIndex = 1
        Me.btnCart.Text = "Add to Cart"
        Me.btnCart.UseVisualStyleBackColor = True
        '
        'lstPants
        '
        Me.lstPants.FormattingEnabled = True
        Me.lstPants.Items.AddRange(New Object() {"BluePants", "RedPants", "GreenPants", "PurplePants"})
        Me.lstPants.Location = New System.Drawing.Point(72, 19)
        Me.lstPants.Name = "lstPants"
        Me.lstPants.Size = New System.Drawing.Size(316, 212)
        Me.lstPants.TabIndex = 0
        '
        'frmpants
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(503, 351)
        Me.Controls.Add(Me.GroupBox1)
        Me.Name = "frmpants"
        Me.Text = "frmpants"
        Me.GroupBox1.ResumeLayout(False)
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents btnClose As System.Windows.Forms.Button
    Friend WithEvents btnCart As System.Windows.Forms.Button
    Friend WithEvents lstPants As System.Windows.Forms.ListBox
End Class
