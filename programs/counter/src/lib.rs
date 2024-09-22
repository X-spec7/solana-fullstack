use anchor_lang::prelude::*;

declare_id!("2wECv2U9BU4jZPDygv7QEzRosMnstsuni9ZwggxBnmDd");

#[program]
pub mod counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
